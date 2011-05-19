/*!
  * detectos - a browser os detector
  * copyright Matt Wood 2011
  * MIT License
  * Borrows heavily from Dustin Diaz's Bowser - https://github.com/ded/bowser
  */
!function (context) {

	var ua = navigator.userAgent,
	o={},
	version;

	o.windows = /Windows/i.test(ua);
	o.macintosh = /Macintosh/i.test(ua);
	o.linux = /Linux/i.test(ua) || /X11/i.test(ua);
	
	function detect() {

		if (o.windows) {

			version = 	/Win16/i.test(ua) ? "Windows 3.11":
						/(Windows 95)|(Win95)|(Windows_95)/i.test(ua) ? "Windows 95":
						/(Windows 98)|(Win98)/i.test(ua) ? "Windows 98":
						/(Windows NT 5.0)|(Windows 2000)/i.test(ua) ? "Windows 2000":
						/(Windows NT 5.1)|(Windows XP)/i.test(ua) ? "Windows XP":
						/Windows NT 5.2/i.test(ua) ? "Windows Server 2003":
						/Windows NT 6.0/i.test(ua) ? "Windows Vista":
						/Windows NT 6.1/i.test(ua) ? "Windows 7":
						/(Windows NT 4.0)|(WinNT4.0)|(WinNT)|(Windows NT)/i.test(ua) ? "Windows NT 4.0":
						/(Windows 98)|(Win 9x 4.90)|(Windows ME)/i.test(ua) ? "Windows ME":
						"unknown";
						
			o.version = version;

		}

		return o;
	}

	var detectos = detect();

	typeof module !== 'undefined' && module.exports ?
    (module.exports.detectos = detectos) :
    (context.detectos = detectos);
    
}(this);