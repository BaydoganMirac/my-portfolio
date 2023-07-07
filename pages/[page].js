import Editor from '../components/editor/Editor';
import Navigation from '../components/navigation/navigation';
import axios from 'axios';
import Head from 'next/head';

export default function Page({pageList, pageContent, page}){
    return (<>
    <Head>
      <title>BaydoganMirac | {page}</title>
      <meta name="description" content={`BaydoganMirac | ${page}`}></meta>
      <meta name="keywords" content={`baydoganmirac, miraç baydoğan, mirac baydogan, software developer`}></meta>
      <meta name="author" content="BaydoganMirac"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="robots" content="index, follow"></meta>
      <meta name="googlebot" content="index, follow"></meta>
      <meta name="google" content="notranslate"></meta>
      <meta name="format-detection" content="telephone=no"></meta>
      <meta name="theme-color" content="#000000"></meta>
      <meta name="msapplication-TileColor" content="#000000"></meta>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <meta name="apple-mobile-web-app-title" content="BaydoganMirac"></meta>
      <meta name="application-name" content="BaydoganMirac"></meta>
      <meta name="mobile-web-app-capable" content="yes"></meta>
      <meta name="HandheldFriendly" content="True"></meta>
      <meta name="MobileOptimized" content="320"></meta>
      <meta name="apple-touch-fullscreen" content="yes"></meta>
      <meta name="referrer" content="no-referrer-when-downgrade"></meta>
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:site" content="@baydoganmirac"></meta>
      <meta name="twitter:creator" content="@baydoganmirac"></meta>
      <meta name="twitter:title" content="BaydoganMirac"></meta>
      <meta name="twitter:description" content={`BaydoganMirac | ${page}`}></meta>
      <meta name="twitter:image:alt" content="BaydoganMirac"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="BaydoganMirac"></meta>
      <meta property="og:description" content={`BaydoganMirac | ${page}`}></meta>
      <meta property="og:url" content="https://baydoganmirac.net"></meta>
      <meta property="og:site_name" content="BaydoganMirac"></meta>
      <meta property="og:locale" content="tr_TR"></meta>
      <meta property="og:image:width" content="192"></meta>
      <meta property="og:image:height" content="192"></meta>
      <meta property="og:image:alt" content="BaydoganMirac"></meta>
      <meta property="og:image:type" content="image/png"></meta>
      <meta property="og:image:secure_url" content="/android-icon-192x192.png"></meta>
      <meta property="og:updated_time" content="1634170913"></meta>
      <meta property="og:see_also" content="https://www.linkedin.com/in/baydoganmirac/"></meta>
      <meta property="og:see_also" content="
      https://www.instagram.com/baydoganmirac/"></meta>
      <meta property="og:see_also" content="https://twitter.com/baydoganmirac"></meta>
      <meta property="og:see_also" content="
      https://www.youtube.com/@BaydoganMirac"></meta>
      <meta property="og:see_also" content="
      https://www.facebook.com/baydoganmirac/"></meta>
    </Head>
    
    <div className="flex flex-row w-full overflow-hidden">
      <Navigation activePage={page} pageList={pageList}><Editor page={page} pageList={pageList} pageContent={pageContent}></Editor></Navigation>
    </div>
    </>)
}
export async function getServerSideProps(context){
  let page = context?.params?.page ?? 'Aboutme';
  const resPageList = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/pages`)
  let pageList = resPageList.data.pages;
  const resPageContent = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/content/${page}`)
  let pageContent = resPageContent.data;
  return {
    props: {
      pageList,
      pageContent, 
      page
    }
  }
}