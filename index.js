const { Option, TypeRegistry } = require('@polkadot/types')

class OptionalAccId extends Option.with('AccountId') {}
class NestedOptionalAccId extends Option.with(OptionalAccId) {}

const registry = new TypeRegistry()

// Try to create Option<Option<null>>:
const nestedNullOpt = new NestedOptionalAccId(registry, new OptionalAccId(registry, null))

// Expect nestedNullOpt.isSome to be true and nestedNullOpt.unwrap() to be Option<null>
if (nestedNullOpt.isSome) {
    console.log(nestedNullOpt.unwrap())
} else {
    console.log('nestedNullOpt.isSome is false')
}
