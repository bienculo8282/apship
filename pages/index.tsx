import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import PostPreview from '../components/post-preview'
import Date from '../components/date'
import Header from '../components/header'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const posts = edges.filter(o => o?.node?.title)

  console.log(posts);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Daily Express - Read the best everyday</title>
        <link rel="shortcut icon" href="https://i0.wp.com/hemdohoa.com/wp-content/uploads/Asset-4.png?fit=32%2C32&#038;ssl=1" sizes="32x32" />
        <link rel="icon" href="https://i0.wp.com/hemdohoa.com/wp-content/uploads/Asset-4.png?fit=192%2C192&#038;ssl=1" sizes="192x192" />
      </Head>
      <Header />
      <Intro />
      <Container>
        <div id="content" className="container home">
          <div className="row">
            <div className="col-md-8">
              <div id="post-621" className="post-621 post type-post status-publish format-standard has-post-thumbnail hentry category-sports">
                {posts.map(({ node }) => (
                  <div key={node.slug} className="mg-posts-sec mg-posts-modul-6  wd-back">
                    <div className="mg-posts-sec-inner row">
                      <div className="d-md-flex mg-posts-sec-post mb-4 w-100">
                        <div className="col-12 col-md-6">
                          <a href={`/posts/${node.slug}`}>
                            <div className="mg-blog-thumb back-img md" style={{ backgroundImage: "url('" + node.featuredImage?.node?.sourceUrl + "');" }}>
                            </div>
                          </a>
                        </div>
                        <div className="mg-sec-top-post col">
                          <h4 className="title"><a href={`/posts/${node.slug}`}>{node.title}</a></h4>
                          <div className="mg-blog-meta">
                            <span className="mg-blog-date"><i className="fa fa-clock-o"></i>
                              <Date dateString={node.date} />
                            </span>
                          </div>
                          <div className="mg-content overflow-hidden">
                            <p>Pep Guardiola and Erik ten Hag will face off once again in the Manchester derby&nbsp;(Image: Michael Regan/Getty Images) Manchester City have ‘no chance’ vs Manchester United in Saturday’s Premier League…</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}


              </div>
            </div>
            <aside className="col-md-4">
              <div id="sidebar-right" className="mg-sidebar">
                <div id="block-2" className="mg-widget widget_block widget_search">
                  <form role="search" method="get" action="https://hemdohoa.com/" className="wp-block-search__button-outside wp-block-search__text-button wp-block-search">
                    <label htmlFor="wp-block-search__input-1" className="wp-block-search__label">Search</label>
                    <div className="wp-block-search__inside-wrapper ">
                      <input type="search" id="wp-block-search__input-1" className="wp-block-search__input wp-block-search__input" name="s" defaultValue="" placeholder="" required />
                      <button type="submit" className="wp-block-search__button wp-element-button">Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
