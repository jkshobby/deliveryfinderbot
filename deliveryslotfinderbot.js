//---------------------------------------------------------------------
//---------PUT YOUR CONFIGURATION HERE OF YOUR DESIRED RETAILER--------
//---------------------------------------------------------------------
const instacartCookie         = 'XXXXX';
const amazonWholesfoodCookie  = 'XXXXX'; //to find availability in Amazon Wholes Food, replace XXXXX with value of `cookie` you collected in Step 3
const amazonFreshCookie       = 'XXXXX'; //to find availability in Amazon Fresh, replace XXXXX with value of `cookie` you collected in Step 3
const costcoSamedayCookie     = 'XXXXX'; //to find availability in Costco Sameday, replace XXXXX with value of `cookie` you collected in Step 3
const samsclubCookie          = 'SSLB=1; SSID1=CABL_B0AAAAAAABPDZpeKBEADE8Nml4BAAAAAAAAAAAATw2aXgBjBg; SSSC1=362.G6816775619133575464.1|0.0; dcenv=TB-DFW; AMCVS_B98A1CFE53309C340A490D45%40AdobeOrg=1; JSESSIONID=C162FBC90510BCE1D3DB79970975C73D.estoreapp-274179263-25-548829406; prftdp=0; prftsl=0; NSC_JOqyreriep202r0eksinc1efkgrc2cc=19aea388178755caf4eaaf81f61c03b253372cdf8810f7f29dc0c32d5fdb7e0fb62f2114; samsHubbleSession=C162FBC90510BCE1D3DB79970975C73D.estoreapp-274179263-25-548829406; samsVisitor=27771894008; TS0139f7c0=0130aff23266e6aad926964f387ba2377bcc60d44f8f4952c720aceb92c1185b4597f10fa5f6b1db1e4dee1f2073a6eb3c1a0acc9f; s_ecid=MCMID%7C33647440847594186893276332513932324510; AMCV_B98A1CFE53309C340A490D45%40AdobeOrg=-1330315163%7CMCIDTS%7C18370%7CMCMID%7C33647440847594186893276332513932324510%7CMCAAMLH-1587759042%7C9%7CMCAAMB-1587759042%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1587161442s%7CNONE%7CMCAID%7CNONE; s_cc=true; myPreferredFilter=all; AUTOSELECTCLUB=1; smtrrmkrInstanceIdDesktop=d9ml7sullr-1; samsorder=8d664da07778cf2f73b504b5cb62b422; _fbp=fb.1.1587154243474.1748174924; _mibhv=anon-1587154243881-1209660637_4591; rmStore=dmid:8096; __gads=ID=ab1316ef7a83729f:T=1587154259:S=ALNI_MY_yORGfTUzOxpS6f-a1v7X_TO63w; TS01f4281b=0130aff23236786f50bdabf5319e9f4dc2cb92edbc3753a174243c27f9848404bed5a3de906f602809e57f808b4918890de2fa8dbc; rcs=eF4FwbkNgDAQBMDEEb2s5L3HNh3QhrmTJQIyoH5mynZ_z5WVXRvoo9PN92EyYAqwvHGE6enMCo80mKthzSbg8mjSa07KD3YHEYY; stc116508=tsa:1587154244200.128097238.99554491.9129963403630994.:20200417204625|env:1%7C20200518201044%7C20200417204625%7C3%7C1060345:20210417201625|uid:1587154244200.1595107915.4297576.116508.402707397.:20210417201625|srchist:1060345%3A1%3A20200518201044:20210417201625; _br_uid_2=uid%3D9694187185850%3Av%3D13.0%3Ats%3D1587154244309%3Ahc%3D3; smtrrmkr=637227514041248446%5E017189c4-19e4-467b-854f-d764ec9f57fc%5E017189c4-19e4-4ba3-afa2-f69c3adebe37%5E0%5E67.180.202.215; mprtcl-v4_1ABEE17A={\'gs\':{\'ie\':1|\'dt\':\'f763ca82e6f80f41a1ecd1d01ec718f2\'|\'cgid\':\'35b8d547-d1da-4edd-bc7d-6e5982dc6166\'|\'das\':\'186827f2-1c92-427d-a086-f248d5da078c\'|\'csm\':\'WyItMjEyODYxMzQzNjI4MjI4MzUxMSJd\'|\'sid\':\'1D9BFA94-ED2D-4669-B8C4-40112AA6CC6C\'|\'les\':1587154692455|\'ssd\':1587154244013}|\'l\':0|\'-2128613436282283511\':{\'fst\':1587154244243}|\'cu\':\'-2128613436282283511\'}; SSRT1=Fw-aXgADAA; myPreferredClub=6626; myNeighboringClubs=\"\"; myPreferredClubName=Concord%2C+CA; s_sq=%5B%5BB%5D%5D; akavpau_P3=1587155326~id=9efdeedddff5e3ee27958a20466a1130';
//---------------------------------------------------------------------
//---------------------DO NOT EDIT BELOW THIS LINE---------------------
//---------------------------------------------------------------------
let retalierConfig = {
  'amazonwholesfood': {
    'label': 'Amazon Wholes Food',
    'url': 'https://www.amazon.com/gp/buy/shipoptionselect/handlers/display.html?hasWorkingJavascript=1',
    'signature': 'Next available', 
    'responseDataType': 'html',
    'cookie': amazonWholesfoodCookie,
    'cookieStr': 'amazonWholesfoodCookie'
  },
  'instacart': {
    'label': 'InstaCart',
    'url': 'https://www.instacart.com/v3/retailers/1/delivery_options?source=web`',
    'signature': 'green_window',
    'responseDataType': 'json',
    'cookie': instacartCookie,
    'cookieStr': 'instacartCookie'
  },
  'costcosameday': {
    'label': 'Costco Sameday',
    'url': 'https://sameday.costco.com/v3/retailers/5/delivery_options?source=web`',
    'signature': 'green_window',
    'responseDataType': 'json',
    'cookie': costcoSamedayCookie,
    'cookieStr': 'costcoSamedayCookie'
  },
  'amazonfresh': {
    'label': 'Amazon Fresh',
    'url': '',
    'signature': '',
    'responseDataType': '',
    'cookie': amazonFreshCookie,
    'cookieStr': 'amazonFreshCookie'
  },
  'samsclub': {
    'label': 'SamsClub',
    'url': 'https://www.samsclub.com/api/node/vivaldi/v1/slots/club/xxxx?serviceType=PICKUP&numOfDays=2&capacity=1',
    'signature': '\"AVAILABLE\"',
    'responseDataType': 'json',
    'cookie': samsclubCookie,
    'cookieStr': 'samsclubCookie'
  }
};

let   checkingInEveryXminutes = 1; //Minimum value is 1 minute
const sleep     = require('sleep');
const https     = require('https')
const player    = require('play-sound')();
const nodemailer = require('nodemailer');

const minFrequency  = 1;

// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   port: 465,
//   secure: true,
//   auth: {
//     user: '', //Gmail username
//             pass: ''//Gmail password
//   }
// });

// const mailOptions = {
//   from: 'rubenshobby.jacob@gmail.com', // Sender address
//   to: 'jkshobby@gmail.com',         // List of recipients
//   subject: 'Design Your Model S | Tesla', // Subject line
//   text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
// };


//Don't bombard by checking in every less than minFrequency minute(s)
checkingInEveryXminutes = (checkingInEveryXminutes < minFrequency) ? minFrequency : checkingInEveryXminutes;

//Accept the command line argument
let retailerNamePassed =(process.argv.slice(2)[0]);
console.log(retailerNamePassed);
let retailerNames = Object.keys(retalierConfig);

if (retailerNamePassed) {
  if (!retailerNames.includes(retailerNamePassed.substring(1))) {
    console.log(`Invalid retailer name. It must be one of these ${retailerNames.toString()}`);
    process.exit(4);
  } else {
    retailerNamePassed = retailerNamePassed.substring(1);
  }
} else {
  console.log(`Missing the retailer name. It must be one of these ${retailerNames.toString()}`);
  process.exit(5);
}

let retailer = retalierConfig[retailerNamePassed];

function beep() {
  player.play('beep.mp3', function (err) {
    return;
  });
}

function pingRetailer(retailer, freqInterval, confirmConfig) {
  const options = {
    headers: {'Cookie': retailer.cookie}
  }

  if(retailerNamePassed ==='samsclub'){
    const clubId = samsclubCookie.slice(samsclubCookie.indexOf("myPreferredClub=")+16,samsclubCookie.indexOf("myPreferredClub=")+20);
    var tempurl =retailer.url;
    tempurl = tempurl.replace('xxxx',clubId);
    retailer.url= tempurl;
  }
  const req = https.get(retailer.url, options, resp => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received.
    resp.on('end', () => {
      let responseString = '';
      if (resp.statusCode != 200){
        if (confirmConfig) {
          console.error(`** FAILED (CODE1) ** YOU HAVE INCORRECT VALUE OF ${retailer.cookieStr} AT THE TOP LINE OF deliveryslotfinderbot.js`);
        }
        console.error(`Response code: ${resp.statusCode}`);
        if (retailer.responseDataType == 'json') {
          try { //https://nodejs.org/en/knowledge/errors/what-is-try-catch/#but-wait-isn-t-it-node-js-convention-to-not-use-try-catch
            //Notorious JSON parsing - but not a show stopper.
            console.error(JSON.parse(data).error);
          } catch (e) {
            console.log(e);
          }
        } else {
          console.error(data);
        }
        if (confirmConfig) { //return only first time, else continue
          return;
        } else {
          console.log('Retailers server encountered some hiccup, so waiting for 2 minutes before restarting with hope server will come back. If this message keeps showing for more than 5 times, then manually kill the script and start again. In rare case, retailer may expire the cookie, if that is the case, then re-collect the cookie and enter it at top of deliveryslotfinderbot.js again.');
          // Hoping server response may recover, so lets sleep for 2 minutes, and then restart with user input sleep timing
          sleep.sleep(2*60);
        }
      } else if (retailer.cookieStr == 'amazonWholesfoodCookie') {
        //Amazon wholesfood has different check - it returns 200 even cookie is wrong, so need to check the presence of this string
        if (!data.includes('Select a day')) {
          console.error(`** FAILED (CODE2) ** YOU HAVE INCORRECT VALUE OF ${retailer.cookieStr} AT THE TOP LINE OF deliveryslotfinderbot.js`);
          return;
        }
      } else {
        if (confirmConfig) {
          console.log(`** SUCCESS ** YOUR COOKIE VALUE OF ${retailer.cookieStr} IS CORRECT, NOW LET THE deliveryslotfinderbot FIND AND ALERT YOU. MAKE SURE YOU KEEP THIS TERMINAL WINDOW & CHECKOUT PAGE OPEN WITH YOUR LAPTOP SOUND AT MAX`);
          console.log("--------------------------------------------------------------------");
        }
      }

      if (retailer.responseDataType == 'json' && retailerNamePassed !='samsclub') {
        responseString = JSON.stringify(data);
      } else {
        let responseString = data;
      }

      if(data.indexOf(retailer.signature) > -1) {
        //Commenting EMAIL MODULE
        // try { 
        //   transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         return console.log(error);
        //     }
        //     console.log('Message sent: %s', info.messageId);
        // });
        // } catch (error) {
        //   console.log(error);
        // }
        
        console.log(`${new Date().toString()} - ******** WOHOOOO FOUND A DELIVERY WINDOW, GO TO YOUR ALREADY OPENED CART WEB PAGE AND REFRESH THE PAGE TO SEE AVAILABLE WINDOWS *********`);
        while(true) {
          beep(); 
          sleep.sleep(2);
        }
      } else {
        console.log(`${new Date().toString()} - No delivery window found for ${retailer.label}, using cookie value of ${retailer.cookieStr}. Next check in ${freqInterval} minute(s)`);
        sleep.sleep(freqInterval*60);
        pingRetailer(retailer, freqInterval, false);
      }
    });
    
  });

  //On error
  req.on('error', error => {
    console.error(error);
  });

  req.end();
}

console.log(`
Starting the Delivery deliveryslotfinderbot for ${retailer.label} with this configuration:
----------------------------------------------------------------------------------
URL =====> ${retailer.url}
checkingInEveryXminutes =====> ${checkingInEveryXminutes} minute(s)
Cookie =====> ${retailer.cookie}
----------------------------------------------------------------------------------
`);

pingRetailer(retailer, checkingInEveryXminutes, true);
