import { parse, visit } from "solidity-parser-antlr";

const parserOpts = { range: true, loc: true, tolerant: false };

const anaylzeCode = (input: string) => {
  const codeInput = getCodeInput(input);

  let ast: any;
  try {
    ast = parse(codeInput, parserOpts);
  } catch (e) {
    console.error("Err at parsing", e);
    return { error: "Invalid Input" };
  }

  return {
    imports: findImports(ast),
    contracts: findContracts(ast),
  };
};

const getCodeInput = (input: string) => {
  return input.substring(1, input.length - 1);
};

const findImports = (ast: any) => {
  const imports: string[] = [];
  visit(ast, {
    ImportDirective: (node) => {
      imports.push(node.path);
    },
  });
  return imports;
};

const findContracts = (ast: any) => {
  const contracts: string[] = [];
  visit(ast, {
    ContractDefinition: (node) => {
      contracts.push(node.name);
    },
  });
  return contracts;
};

export default anaylzeCode;
