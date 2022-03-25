var javaInit = require('./javaInit');
var java = javaInit.getJavaInstance();

var UUID = java.newInstanceSync("java.util.UUID");
console.log(UUID.randomUUIDSync());

