export type Node =
  | IPackage
  | IFile
  | IPackageClause
  | IImportDeclaration
  | IBlock
  | IBadStatement
  | IExpressionStatement
  | IReturnStatement
  | IOptionStatement
  | IBuiltinStatement
  | IVariableAssignment
  | IMemberAssignment
  | IArrayExpression
  | IFunctionExpression
  | IBinaryExpression
  | ICallExpression
  | IConditionalExpression
  | ILogicalExpression
  | IMemberExpression
  | IIndexExpression
  | IPipeExpression
  | IObjectExpression
  | IUnaryExpression
  | IProperty
  | IIdentifier
  | IBooleanLiteral
  | IDateTimeLiteral
  | IDurationLiteral
  | IFloatLiteral
  | IIntegerLiteral
  | IPipeLiteral
  | IRegexpLiteral
  | IStringLiteral
  | IUnsignedIntegerLiteral;

export interface IPosition {
  line: number;
  column: number;
}

export interface ISourceLocation {
  file: string;
  start: IPosition;
  end: IPosition;
  source: string;
}

export interface IBaseNode {
  location?: ISourceLocation;
  errors?: Array<{msg: string}>;
}

export interface IPackage extends IBaseNode {
  path?: string;
  package: string;
  files: IFile[];
  type: "Package";
}

export interface IFile extends IBaseNode {
  name?: string;
  package: IPackageClause;
  imports: IImportDeclaration[];
  body: Statement[];
  type: "File";
}

export interface IPackageClause extends IBaseNode {
  name: IIdentifier;
  type: "PackageClause";
}

export interface IImportDeclaration extends IBaseNode {
  as: IIdentifier;
  path: IStringLiteral;
  type: "ImportDeclaration";
}

export interface IBlock extends IBaseNode {
  body: Statement[];
  type: "Block";
}

export type Statement =
  | IBadStatement
  | IExpressionStatement
  | IReturnStatement
  | IOptionStatement
  | IBuiltinStatement
  | IVariableAssignment
  | IMemberAssignment;

export interface IBadStatement extends IBaseNode {
  text: string;
  type: "BadStatement";
}

export interface IExpressionStatement extends IBaseNode {
  expression: Expression;
  type: "ExpressionStatement";
}

export interface IReturnStatement extends IBaseNode {
  argument: Expression;
  type: "ReturnStatement";
}

export interface IOptionStatement extends IBaseNode {
  assignment: Assignment;
  type: "OptionStatement";
}

export interface IBuiltinStatement extends IBaseNode {
  id: IIdentifier;
  type: "BuiltinStatement";
}

export type Assignment = IVariableAssignment | IMemberAssignment;

export interface IVariableAssignment extends IBaseNode {
  id: IIdentifier;
  init: Expression;
  type: "VariableAssignment";
}

export interface IMemberAssignment extends IBaseNode {
  member: IMemberExpression;
  init: Expression;
  type: "MemberExpression";
}

export type Expression =
  | IArrayExpression
  | IFunctionExpression
  | IBinaryExpression
  | IBooleanLiteral
  | ICallExpression
  | IConditionalExpression
  | IDateTimeLiteral
  | IDurationLiteral
  | IFloatLiteral
  | IIdentifier
  | IIntegerLiteral
  | ILogicalExpression
  | IMemberExpression
  | IIndexExpression
  | IObjectExpression
  | IPipeExpression
  | IPipeLiteral
  | IRegexpLiteral
  | IStringLiteral
  | IUnaryExpression
  | IUnsignedIntegerLiteral;

export interface IArrayExpression extends IBaseNode {
  elements: Expression[];
  type: "ArrayExpression";
}

export interface IFunctionExpression extends IBaseNode {
  params: IProperty[];
  body: Node;
  type: "FunctionExpression";
}

export interface IBinaryExpression extends IBaseNode {
  operator: Operator;
  left: Expression;
  right: Expression;
  type: "BinaryExpression";
}

export interface ICallExpression extends IBaseNode {
  callee: Expression;
  arguments: Expression[];
  type: "CallExpression";
}

export interface IConditionalExpression extends IBaseNode {
  test: Expression;
  alternate: Expression;
  consequent: Expression;
  type: "ConditionalExpression";
}

export interface ILogicalExpression extends IBaseNode {
  operator: LogicalOperator;
  left: Expression;
  right: Expression;
  type: "LogicalExpression";
}

export interface IMemberExpression extends IBaseNode {
  object: Expression;
  property: PropertyKey;
  type: "MemberExpression";
}

export interface IIndexExpression extends IBaseNode {
  array: Expression;
  index: Expression;
  type: "IndexExpression";
}

export interface IPipeExpression extends IBaseNode {
  argument: Expression;
  call: ICallExpression;
  type: "PipeExpression";
}

export interface IObjectExpression extends IBaseNode {
  properties: IProperty[];
  type: "ObjectExpression";
}

export interface IUnaryExpression extends IBaseNode {
  operator: Operator;
  argument: Expression;
  type: "UnaryExpression";
}

export interface IProperty extends IBaseNode {
  key: PropertyKey;
  value: Expression;
  type: "Property";
}

export interface IIdentifier extends IBaseNode {
  name: string;
  type: "Identifier";
}

export interface IBooleanLiteral extends IBaseNode {
  value: boolean;
  type: "BooleanLiteral";
}

export interface IDateTimeLiteral extends IBaseNode {
  value: string; // RCF3339 datetime
  type: "DateTimeLiteral";
}

export type DurationUnit =
  | "y"
  | "mo"
  | "w"
  | "d"
  | "h"
  | "m"
  | "s"
  | "ms"
  | "us"
  | "µs"
  | "ns";

export interface IDuration {
  magnitude: number;
  unit: DurationUnit;
}

export interface IDurationLiteral extends IBaseNode {
  values: IDuration[];
  type: "DurationLiteral";
}

export interface IFloatLiteral extends IBaseNode {
  value: number;
  type: "FloatLiteral";
}

export interface IIntegerLiteral extends IBaseNode {
  value: number;
  type: "IntegerLiteral";
}

export interface IPipeLiteral extends IBaseNode {
  type: "PipeLiteral";
}

export interface IRegexpLiteral extends IBaseNode {
  value: string;
  type: "RegexpLiteral";
}

export interface IStringLiteral extends IBaseNode {
  value: string;
  type: "StringLiteral";
}

export interface IUnsignedIntegerLiteral extends IBaseNode {
  value: number;
  type: "UnsignedIntegerLiteral";
}

export type MultiplicationOperator = "*";
export type DivisionOperator = "/";
export type AdditionOperator = "+";
export type SubtractionOperator = "-";
export type LessThanEqualOperator = "<=";
export type LessThanOperator = "<";
export type GreaterThanOperator = ">";
export type GreaterThanEqualOperator = ">=";
export type InOperator = "in";
export type NotOperator = "not";
export type NotEmptyOperator = "not empty";
export type EmptyOperator = "empty";
export type StartsWithOperator = "startswith";
export type EqualOperator = "==";
export type NotEqualOperator = "!=";
export type RegexpMatchOperator = "=~";
export type NotRegexpMatchOperator = "!~";
export type AndOperator = "and";
export type OrOperator = "or";

export type Operator =
  | MultiplicationOperator
  | DivisionOperator
  | AdditionOperator
  | SubtractionOperator
  | LessThanEqualOperator
  | LessThanOperator
  | GreaterThanOperator
  | GreaterThanEqualOperator
  | InOperator
  | NotOperator
  | NotEmptyOperator
  | EmptyOperator
  | StartsWithOperator
  | EqualOperator
  | NotEqualOperator
  | RegexpMatchOperator
  | NotRegexpMatchOperator;

export type LogicalOperator = AndOperator | OrOperator;

export type PropertyKey = IIdentifier | IStringLiteral;
