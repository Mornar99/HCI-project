import { getNewsPosts } from "@/lib/contentful";
import styles from "./page.module.scss";
import Image from "next/image";
import { NewsPost } from "../../../public/types";

export default async function NewsPage() {
  const newsPosts: NewsPost[] = await getNewsPosts();
  console.log(newsPosts);

  return (
    <div className={styles.newsContainer}>
      <h1 className={styles.title}>Latest Shoe News</h1>
      <div className={styles.newsGrid}>
        {newsPosts.map((post, index: number) => (
          <div key={index} className={styles.newsItem}>
            <Image
              src={post.image?.url}
              alt={post.title}
              width={310}
              height={300}
              className={styles.image}
            />
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.date}>
              {new Date(post.publishedDate).toLocaleDateString()}
            </p>
            <p className={styles.content}>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
