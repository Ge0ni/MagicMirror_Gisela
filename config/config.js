/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "de",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Feiertage",
			position: "top_left",
			config: {
				calendars: [
					{
						maximumEntries: 4, // Total Maximum Entries
						limitDays: 0, // Limit the number of days shown, 0 = no limit
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/de.german%23holiday%40group.v.calendar.google.com/public/basic.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "middle_center",
			config: {
				//remoteFile: 'gisela_compliments.json',
				}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Kassel",
				locationID: "2892513", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "3820478409f7558ae1ae4ed252074ae7",
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Kassel",
				locationID: "2892513", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "3820478409f7558ae1ae4ed252074ae7",
				maxNumberOfDays: 5,
				showRainAmount: true,
			}
		},
		/* {
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		}, */
		{
			module: 'MMM-bitcoin',
			position: 'top_left',
			config: {
				fiat: 'eur',          // 'usd' and 'eur' available, defaults to 'usd'
				showBefore: 'Bitcoin',    // will display before the bitcoin price, default 'Bitstamp'
				updateInterval: 60000 // update interval in milliseconds
			}
		},
		{
			module: "MMM-Stock",
			position: "top_left",
			config: {
				companies: ["TSLA", "NIO", "XPEV", "LI", "EH"],
				currency: "usd",
			}
		},
		/* {
			module: "MMM-DailyPower",
			position: "bottom_center",       	// This can be any region
			config: {
				width: "75%",				// Configure the width of this widget
				margin: "0 auto",			// Add margin to the widget
				translation: "luther1545",			// Set the bible translation, see 'available translations' at 'https://dailypower.de/api/v1/translations'
				verseColor: "#ccc",			// Color of the verse
				verseSize: "28px",			// Size of the verse
				referenceColor: "#ccc",		// Color of the reference
				referenceSize: "32px",		// Size of the reference
				showImage: false,			// Display an image for the daily verse or keep the space
				blackAndWhite: false		// Black and White image or keep the colors
			}
		}, */
		/* {
			module: "MMM-Spotify",
			position: "bottom_left",
			config: {
				debug: false,
				style: "mini",
				miniBarConfig: {
					album: true,
					scroll: true,
					logo: false,
				},
			}
		}, */
		{
			module: "MMM-NowPlayingOnSpotify",
			position: "top_left",
			config: {
				clientID: "70c93566aca64ea292b1d29102849d1f",
				clientSecret: "83e9f4477b3946fcb52cfc7ee0bd53b5",
				accessToken: "BQA4eAlRRRqU3x4DaVa3mH0iFI4QYcN8oMoe14Xz2ttVH_UL_1m7tdeA3Jnu3LWR1mhcQbvjn8F267PH4YT-3WMc_i7aae_0M84gGYUHzQCn4x8zd_S7O1Nwvbv8nZktyW9p_HnYpI7EsQH-pwqrkuY",
				refreshToken: "AQAlfp2HYv97xOeIDXa9Dpsi2--AAzchyxXBCGx-reNI4-njJIx996m7N8EMzerZwQEgAt7ifMllizGz9ad92CUF4yc5KDyxQhNkgmmfNx3t5Fn7J37AMxwWGSk6cs6I_u8",
				showCoverArt: false,
			}
		},
		{
			module: "MMM-COVID19-AMPEL",
			position: 'top_center',
			config:	{
				header: 'COVID-19 Inzidenzwert', // Header Title of Display on MagicMirror
				cityID: ["136"], // City ID from  https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0/data
				infoRowClass: "small", // small, medium
				showUpdateDateInHeader: true, //Show update date in header
				showUpdateDateInRow: false, //Show update date in each row
				showStatusLightLeft: true, //Show left status light
				showStatusLightRight: true, // Show right status light
				showTitle: true, //Show Title row with headlines if you want to display more than one information
				showCases: true, //Show amount of active cases in city
				showCasesPerPeople: true, //Show Percentage of active cases per inhabitant
				showDeathRatePerPeople: true, //show death rate in % of infected people
				show7DayIncidence: true, // Show 7 day incidence value for your location
				landModeOnly: false, // Shows Bundesland instead of City in Bundesland (Thos who want to display only the Bundesland)
				numberOfDigits: 2, //Round the Percentage and incidence value to number of digits
				updateInterval: 3600000, // update interval in milliseconds // 1 Hour - Values are only refreshed every 24 H on Server
				fadeSpeed: 4000
				}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
