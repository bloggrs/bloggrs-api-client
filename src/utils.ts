export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
        );
      });
    });
}

export function getInstanceProperties(instance: any, resourceName: string) {
  const propertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(instance));
  const exclude = [ "constructor", resourceName ];
  const properties = {};
  
  propertyNames.forEach(key => {
    const original_key = key;
    const excluded = exclude.indexOf(key) !== -1;
    if (excluded) return;
    const prefix = resourceName + "_";
    const key_includes_prefix = key.indexOf(prefix) !== -1
    if (key_includes_prefix) key = key.replace(prefix, "")
    const func = instance[original_key].bind(instance);
    properties[key] = func;
  })
  return properties;

}