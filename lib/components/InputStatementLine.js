import StatementLine from './StatementLine';

const InputStatementLine = StatementLine.extend`
        color: white;
      :: before {
        color: forestgreen;
        content: "$";
        padding-right: .5rem;
      }
`;

export default InputStatementLine;
