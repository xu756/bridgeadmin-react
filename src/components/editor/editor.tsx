import React, { useEffect,  } from 'react';
import EditorJS, { API,ToolConstructable } from '@editorjs/editorjs';
import { BlockMutationEvent } from '@editorjs/editorjs/types/events/block';
// @ts-ignore
import Header from '@editorjs/header';
// @ts-ignore
import List from '@editorjs/list';
// @ts-ignore
import ImageTool from '@editorjs/image';
import localeCN from './locale-cn';

export default function Editor() {

    useEffect(() => {
        const editor = new EditorJS({
            holder: 'editorid',
            tools: {
                header: {

                    class: Header,
                    // inlineToolbar: ['link'],
                    config: {
                        placeholder: '输入标题',
                    },
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                },
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            byFile: 'http://localhost:3000/uploadFile', // Your backend file uploader endpoint
                            byUrl: 'http://localhost:3000/fetchUrl', // Your endpoint that provides uploading by Url
                        },
                    },
                },
            },
            placeholder: '让我们开始创作吧！',
            hideToolbar: false, // 显示工具栏
            i18n: localeCN, // 使用中文本地化文件
            onChange(api: API, event: BlockMutationEvent | BlockMutationEvent[]) {
                console.log('something changed', api, event);
            },
        });

        // 当组件卸载时销毁EditorJS实例
        return () => {
            editor.destroy();
        };
    }, []);

    return (
        <div>
            <h1>Editor</h1>
            <div id="editorid"></div>
        </div>
    );
}
