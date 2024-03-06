// Catch property that is not in schema
// # Prop not part of the schema
function validateEmployeeProps(key, schema) {
  for (let property of schema) {
    if (property["name"] === key) return;
  }
  return {
    ok: false,
    message: `Property ${key} is not a part of the schema`,
  };
}

// Validate that employee follows schema structure
function validatePropModel(employee, propModel) {
  const propName = propModel["name"];
  const propRequired = propModel["required"];
  const propType = propModel["type"];

  // # Prop Required
  if (employee[propName] === undefined && propRequired) {
    return { ok: false, message: `${propName} is required` };
  }
  // # Wrong Type
  if (typeof employee[propName] !== propType && propType !== "array:employee") {
    return {
      ok: false,
      message: `Mismatch: ${propName} is expected to be ${propType}`,
    };
  }

  return;
}

// 2. Validate that all props are a part of the schema
function validateEmployee(employee, schema) {
  // 1. Validate props based on schema
  for (let propModel of schema) {
    const result = validatePropModel(employee, propModel);
    if (result) return result;
  }

  const employeeKeys = Object.keys(employee);
  for (let key of employeeKeys) {
    const result = validateEmployeeProps(key, schema);
    if (result) return result;
  }
}

function validate(employees, schema) {
  const successMessage = { ok: true, message: "Validated" };

  for (let employee of employees) {
    if (employee["reports"]) {
      const result = validate(employee["reports"], schema);
      if (result !== successMessage) return result;
    }
    const result = validateEmployee(employee, schema);
    if (result) return result;
  }

  return successMessage;
}

const employees = [
  {
    id: 1,
    name: "alice",
    // name: 23,
    // someProp: "x",
    reports: [
      {
        id: 2,
        name: "zoey",
        // someProp: "x",
      },
    ],
  },
];
const schema = [
  {
    name: "id",
    required: true,
    type: "number",
  },
  {
    name: "name",
    required: true,
    type: "string",
  },
  {
    name: "reports",
    required: true,
    type: "array:employee",
  },
];

console.log(validate(employees, schema));
