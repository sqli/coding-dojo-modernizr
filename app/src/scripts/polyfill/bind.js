// Many more modern browsers do not support Function.bind
// Copy from es5-shim referenced above. Copyright the original authors. MIT License.
if(!Function.prototype.bind){var slice=Array.prototype.slice;Function.prototype.bind=function a(a){function d(){if(this instanceof d){var a=Object.create(b.prototype);b.apply(a,c.concat(slice.call(arguments)));return a}else{return b.call.apply(b,c.concat(slice.call(arguments)))}}var b=this;if(typeof b.apply!=="function"||typeof b.call!=="function")return new TypeError;var c=slice.call(arguments);d.length=typeof b==="function"?Math.max(b.length-c.length,0):0;return d}}
