import React from "react";

export type HelloWorldProps = {};

const HelloWorld: React.FC<HelloWorldProps> = () => {
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
};

export { HelloWorld };
