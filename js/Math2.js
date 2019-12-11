var names = ["E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2", "abs", "acos", "acosh", "asin", "asinh", "atan", "atan2", "atanh", "cbrt", "ceil", "clz32", "cos", "cosh", "exp", "expm1", "floor", "fround", "hypot", "imul", "log", "log10", "log1p", "log2", "max", "min", "pow", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"];
for(var i=0;i<names.length; i++){window[names[i]] = eval(`Math.${names[i]}`);}
window["Random"] = function(){return Math.random()}
window["randomf"] = function(max, min){return Math.random()*(max-min)+min;}
window["random"] = function(max, min){return Math.random()+(max-min)+min}
