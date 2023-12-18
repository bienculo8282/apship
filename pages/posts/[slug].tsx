import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Tags from '../../components/tags'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import { useEffect } from 'react'
import Intro from '../../components/intro'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  // const { fbclid } = router.query;

  // useEffect(() => {
  //   if (fbclid) router.replace(`https://thesenholding.com/${router.query.slug}`)
  // })

  // if (fbclid) {
  //   return;
  // }

  return (
    <Layout preview={preview}>
      <Head>
        <div className="mg-nav-widget-area-back" style={{ backgroundImage: "url('https://hemdohoa.com/wp-content/themes/newses/images/head-back.jpg');" }}>
          <div className="overlay">
            <div className="inner" style={{ backgroundColor: "rgba(18,16,38,0.4)" }}>
              <div className="container">
                <div className="mg-nav-widget-area">
                  <div className="row align-items-center">
                    <div className="col-md-4 text-center-xs">
                      <span className="navbar-brand">
                        <img width="80" height="80" src="https://i0.wp.com/hemdohoa.com/wp-content/uploads/Asset-2.png?fit=80%2C80&amp;ssl=1" className="custom-logo" alt="" decoding="async" />
                      </span>
                      <div className="site-branding-text">
                        <h1 className="site-title"><a href="https://hemdohoa.com/" rel="home">Daily Express</a></h1>
                        <p className="site-description" style={{ color: "white" }}>Read the best everyday</p>
                      </div>
                    </div>
                    <div className="col-md-8 text-center-xs">
                      <div className="mg-tpt-tag-area">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Head>
      <Intro />

      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title}
                </title>
                <meta property="og:url" content={post.seo?.opengraphUrl} />
                <meta property="og:type" content={post.seo?.opengraphType} />
                <meta property="og:title" content={post.seo?.opengraphTitle} />
                <meta property="og:description" content={post.seo?.opengraphDescription} />
                <meta property="og:image" content={post.seo?.opengraphImage.link} />
              </Head>
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div className="mg-blog-post-box" style={{backgroundColor: "white", padding: "20px"}}>
                    <PostHeader
                      title={post.title}
                      coverImage={post.featuredImage}
                      date={post.date}
                      author={post.author}
                      categories={post.categories}
                    />
                    <PostBody content={post?.content || ""} />
                    <footer>
                      {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
                    </footer>
                  </div>
                </div>
              </div>

            </article>

            <SectionSeparator />
            {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts?.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}
