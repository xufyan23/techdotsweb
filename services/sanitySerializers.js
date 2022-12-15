import {PreviewCode} from "@sanity/code-input";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const serializers = {
	types: {
		code: (props) => {
			console.log('sadsad', props, PreviewCode({
				selection: {
					language: props.node.language,
					code: props.node.language
				}
			}));
			return<SyntaxHighlighter style={atomOneDark}>
			{props.node.code}
			</SyntaxHighlighter>
		},
	},
}

export default serializers;
