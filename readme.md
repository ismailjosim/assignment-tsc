
# 🎯 Interview Questions - Blog Task

## Differences between interfaces and types in TypeScript?

## Introduction

TypeScript, as a superset of JavaScript, provides robust tools for improving type safety and developer productivity. Among its most discussed features are **interfaces**, **types**, and the use of **union** and **intersection types**. This guide explores the differences between interfaces and types, and demonstrates how to work with union and intersection types effectively.

---

## Differences Between Interfaces and Types in TypeScript

Both **interfaces** and **types** define the shape of objects, but each has unique features and use cases.

### 1. Syntax and Basic Usage

- **Interfaces** are mainly used to define object shapes:

```typescript
interface User {
  name: string;
  age: number;
}
```

- **Types** can define objects, unions, intersections, and more:

```typescript
type User = {
  name: string;
  age: number;
};
```

Both are similar for simple object definitions, but types offer more versatility in other scenarios.

---

### 2. Extending and Merging

- **Interfaces** can be extended and automatically merged when declared multiple times:

```typescript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const individual: Person = { name: "Alice", age: 25 };
```

- **Types** cannot be merged but can be extended using intersections:

```typescript
type Person = {
  name: string;
};

type PersonWithAge = Person & {
  age: number;
};

const individual: PersonWithAge = { name: "Alice", age: 25 };
```

Interfaces are more flexible for automatic merging, especially across files or modules.

---

### 3. Complex Types and Unions

- **Types** can directly represent union and intersection types:

```typescript
type Status = "success" | "error";
```

- **Interfaces** are not suitable for unions and intersections in a straightforward way.

For combining types or allowing multiple possibilities, **types** are preferred.

---

### 4. When to Use What

- **Interfaces** are generally preferred for defining object structures and when extensibility is needed.
- **Types** are better for complex scenarios involving unions, intersections, or advanced type manipulations.

Choose based on your project requirements and how you plan to extend your structures.

---

## Union and Intersection Types in TypeScript

Union and intersection types help create flexible and expressive type combinations.

### 1. Union Types

A union type allows a value to be one of several types.

```typescript
function formatInput(input: string | number): string {
  return typeof input === "number" ? input.toFixed(2) : input.toUpperCase();
}

console.log(formatInput(12.345));  // Output: "12.35"
console.log(formatInput("hello")); // Output: "HELLO"
```

Here, `input` can be either a `string` or a `number`, and the function handles both cases.

---

### 2. Intersection Types

An intersection type combines multiple types into one.

```typescript
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "John",
  employeeId: 1234,
};

console.log(staffMember); // Output: { name: "John", employeeId: 1234 }
```

The `Staff` type combines `Person` and `Employee`, so an object of type `Staff` must have both `name` and `employeeId`

## ==============> END <===============
