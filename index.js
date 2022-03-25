var javaInit = require('./javaInit');
var java = javaInit.getJavaInstance();

const MacProvider = java.import('io.jsonwebtoken.impl.crypto.MacProvider');
const UUID = java.import('java.util.UUID')

;(() => {

	const id = MacProvider.generateKeySync().toStringSync()
	console.log(id)

	const uuid = UUID.randomUUIDSync()
	console.log(uuid.toString())

	
})()


