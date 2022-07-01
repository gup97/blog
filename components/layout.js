import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LayoutFooter from "./Layouts/LayoutFooter";
import LayoutHeader from "./Layouts/LayoutHeader";
import LayoutPost from "./Layouts/LayoutPost";
import LayoutMain from "./Layouts/LayoutMain";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, post }) {
  return (
    <div>
      <Head></Head>
      <LayoutHeader />
      {post ? <LayoutPost>{children}</LayoutPost> : <LayoutMain>{children}</LayoutMain>}
      <LayoutFooter />
    </div>
  );
}
