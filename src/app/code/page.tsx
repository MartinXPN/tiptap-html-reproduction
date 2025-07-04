import Editor from "@/app/code/Editor";

const Page = async () => {
    const document = {
        type: 'doc',
        content: [
            {
                "type": "codeBlock",
                "attrs": {
                    "language": "python"
                },
                "content": [
                    {
                        "type": "text",
                        "text": "for i in range(10):\n    for j in range(i + 1):\n        if j % 2 == 0:\n            print('*', end='')\n        else:\n            print('#', end='')\n    print()"
                    }
                ]
            },
        ],
    };

    return <Editor initialContent={document} />
};

export default Page;
