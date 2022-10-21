import { useRouter } from "next/router";
import Loading from "../../components/common/Loading";
import Layout from "../../components/layout/Layout";
import { usePostQuery, useUserQuery } from "../../hooks/queries";
import dayjs from "dayjs";

export default function Article() {
    const router = useRouter();
    const postId = String(router.query.id);

    const userQuery = useUserQuery('cl849p21n0047x4gjt69x15s2');
    const postQuery = usePostQuery(postId);


    if (userQuery.isLoading || postQuery.isLoading) {
        return <Loading />;
    }

    if (userQuery.isError) {
        const errorMessage = userQuery.error.message;
        return <div>Error: {errorMessage}</div>;
    }

    if (postQuery.isError) {
        const errorMessage = postQuery.error.message;
        return <div>Error: {errorMessage}</div>;
    }

    const article = postQuery.data;

    return (
        <>
            <Layout title='LiveBetter | DBS Bank' heading='LiveBetter' user={userQuery.data}>
                <div className='mx-auto'>
                    <h2 className='text-2xl font-bold text-gray-900 pl-6 pb-1 pr-6'>
                        {article.title}
                    </h2>
                    <div className='overflow-hidden rounded-lg bg-white shadow m-1'>
                        <h1 className='sr-only'>Article: {article.title}</h1>
                        <div className='p-5'>
                            <div className='text-left'>
                                <img src={article.image} />
                            </div>
                            <p className='text-xs pt-3 pb-2 uppercase'>published {dayjs(article.publishedAt).format('D MMM YYYY, h:mm A')} sgt</p>
                            <div
                                className='tracking-tight leading-tight text-justify'
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}