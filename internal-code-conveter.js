// 將文字輸入框內容轉換成內碼，輸出到內碼輸入框。
function convertToInternalCode()
{
	var internalCode = "";

	for (var i = 0; i < text.character.value.length; ++i)
	{
			internalCode += "0x" + text.character.value.charCodeAt(i).toString(16).toUpperCase() + " ";
	}

	text.code.value = internalCode.RTrim();
}

// 將內碼輸入框內容轉換成文字，輸出到文字輸入框。
function convertToCharacter()
{
	var character = "";
	var internalCodeArray = [];

	internalCodeArray = text.code.value.split(" ");

	for (var i = 0; i < internalCodeArray.length; ++i)
	{
		character += String.fromCharCode(internalCodeArray[i]);
	}

	text.character.value = character;
}

// 實作字串的 Trim(), LTrim(), RTrim() 方法。
// 來源：yaosansi's Blog-JavaScript去除空格的三种方法 (trim) http://www.yaosansi.com/post/304.html
String.prototype.Trim = function()
{
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

String.prototype.LTrim = function()
{
	return this.replace(/(^\s*)/g, "");
}

String.prototype.RTrim = function()
{
	return this.replace(/(\s*$)/g, "");
}
