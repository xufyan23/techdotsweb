import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const serializers = {
  types: {
    code: (props) => {
      return<SyntaxHighlighter style={atomOneDark}>
      {props.node.code}
      </SyntaxHighlighter>
    },
  },
}

export default serializers;
