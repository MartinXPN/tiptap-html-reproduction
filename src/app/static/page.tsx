import StaticRenderer from "@/app/static/StaticRenderer";

const Page = async () => {
    const document = {
        type: 'doc',
        content: [
            {type: 'paragraph', content: [{type: 'text', text: 'On the server, or the browser'}]},
        ],
    };

    return <StaticRenderer doc={{document}}/>
};

export default Page;
