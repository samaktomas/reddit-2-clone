import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import PostBox from "../components/PostBox";
import SubredditRow from "../components/SubredditRow";
import { GET_SUBREDDITS_WITH_LIMIT } from "../graphql/queries";

const Home: NextPage = () => {
  const { data } = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  });

  const subreddits: Subreddit[] = data?.getSubredditWithLimit;

  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>Reddit Clone</title>
      </Head>

      {/*  */}
      <PostBox />
      <div className="flex space-y-5">
        <Feed />

        <div
          className="sticky top-36 mx-5 hidden h-fit 
        min-w-[300px] rounded-md border border-gray-300 bg-white
        lg:inline"
        >
          <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>

          <div>
            {subreddits?.map((subreddit, i) => (
              <SubredditRow
                key={subreddit.id}
                topic={subreddit.topic}
                index={i}
              />
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
