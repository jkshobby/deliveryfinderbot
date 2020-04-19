# Delivery Finder Bot
# Mission: To help people stay in the home to minimize the spread of COVID-19 in the USA! 

## Problem: 
**People are getting frustrated when they don't find grocery delivery window available for the online orders. So they have two options - (1) Step out of the home to buy grocery or (2) Keep checking MANUALLY 24/7 to get lucky to find available delivery window.**

## Solution: 
**Run this script, which will check the availability of delivery window of `Instacart` or `Costco Same Day` or `Amazon Wholesfood Market` every minute and alert you as soon as it finds one. Currently this script checks available delivery windows for these retailers:**

| ![](https://github.com/jkshobby/deliveryfinderbot/blob/master/assets/logo_instacart.png)  | ![](https://github.com/jkshobby/deliveryfinderbot/blob/master/assets/logo_wholesfood.png) | ![](https://github.com/jkshobby/deliveryfinderbot/blob/master/assets/logo_costco-same-day.png) |
| ![](https://github.com/jkshobby/deliveryfinderbot/blob/master/assets/logo_samsclub.png)  | ------------- | ------------- |



<hr>

![](
https://github.com/jkshobby/deliveryfinderbot/blob/master/assets/delivery-finder-bot.png)

This is an effort to help people to get their groceries in this difficult time of COVID-19. This script helps you to find a delivery window of InstaCart and Amazon Wholes Food. The finder will alert (you will hear this [Beep sound](https://clyp.it/fjrsqftl) as an alert) you when it finds an availability window is open. 
*This is a barebone (unoptimized) script - `a quick & dirty hack`. If you are a developer, then feel free to send a PR to improve it*

# How to use this finder 
### If you have any difficulty in setting up, then send me email at finder@altmails.com 

## Step 0

*a)* Install `npm` and `nodejs` - 
To do so, go to https://nodejs.org/en/ and download any version of the binary, that will be used for installing `node` as well as `npm`. Then double click the downloaded binary and follow the instructions to install `npm` as well as `node` . To confirm the installation, open your terminal.app window and run `node -v` if that outputs a version number, then you are good to move forward.

*b)* Download (or clone) this repo by clicking the green "Clone or Download" button shown above. If you have downloaded, then unzip the downloaded folder (`deliveryfinderbotmaster`) and rename the folder to `deliveryfinderbot` 

## Step 1
Assuming you are on Mac OS, so open a terminal window and create a folder, let's say, `covid19` 
```
$ mkdir covid19
$ cd covid19
```
Move the downloaded folder `deliveryfinderbot`  (as done in Step0-b above) in `covid19` folder

## Step 2
<hr>

## *If you want to find availability in Instacart or Costco SameDay then follow these three steps*

### Step 2.1
> On Google Chrome browser - for instacart, open https://instacart.com or for Costco SameDay, open https://sameday.costco.com and login to your account. Take your time to add all your items in the shopping cart. Once you have all your desired items in the cart, then move to `Step 3`

### Step 2.2
> Go to your cart page
![Follow this step](https://github.com/jkshobby/deliveryfinderbot/blob/master/assets/Step1.png)

### Step 2.3
> On the checkout page, if there is no availability window, then you may see this page, then 
![follow this step to collect cookie](
https://github.com/jkshobby/deliveryfinderbot/blob/master/assets/Step%202%20and%203.png)
> **Move to step 3 now**

<hr>

## *If you want to find availability in Amazon Wholes Food then follow these three steps*

### Step 2.1
> On Google Chrome browser - open https://amazon.com (on Google Chrome browser) and take your time to add all your items in the shopping cart of Wholes Food (NOT Amazon Fresh). Once you have all your desired items in the cart, then move to `Step 3`

### Step 2.2
> Go to your Whole Foods Market cart page
![Follow this step](https://github.com/jkshobby/deliveryfinderbot/blob/master/assets/wholesfood1.png)

### Step 2.3
> On the checkout page, if there is no availability window, then you may see this page. Then `right click` anywhere on this page and select `inspect` which will open a developer tool bar as shown below 
![follow this step to collect cookie](
https://github.com/jkshobby/deliveryfinderbot/blob/master/assets/wholesfood2_1.png)

> **Move to step 3 now**

<hr>

## *If you want to find availability in Sam'sclub then follow these three steps*

### Step 2.1
> On Google Chrome browser - open https://www.samsclub.com/pickup-times (on Google Chrome browser) and take your time to add all your items in the shopping cart of Samsclub . Once you have all your desired items in the cart, then move to `Step 3`

### Step 2.2
> Go to https://codebeautify.org/javascript-escape-unescape and unescape the cookie value

### Step 2.3
> On the checkout page, if there is no availability window, then you may see this page. Then `right click` anywhere on this page and select `inspect` which will open a developer tool bar as shown below 
![follow this step to collect cookie](
https://github.com/jkshobby/deliveryfinderbot/blob/master/assets/samsclub1.png)

> **Move to step 3 now**

<hr>
<hr>

## Step 3
*IMPORTANT* From the previous step you must have value of `cookie`, save it in any text editor (will be used later).


## Step 4
*IMPORTANT* - Make sure you don't close the retailer's checkout page (from where you collected the cookie) ever while this finder is running. So let the page remain opened.

## Step 5
Go to `covid19` folder and then subfolder `delivery-finder-bot` subfolder where this finder codebase is residing. 

## Step 6
In the `delivery-finder-bot` folder, you would find a file called `deliveryfinderbot.js`. Open that file in any editor and at the top of the file, you will find keys for three different retailers' cookies (lines 4,5 and 6). Whichever retailer's cookie you collected in step2 above, then replace the value of `XXXXX` with the collected cookie value. You can input multiple retaliers' cookies value by replacing the corresponding `XXXXX`. Then save the file.
![example](https://github.com/jkshobby/deliveryfinderbot/blob/master/assets/config1.png)

## Step 7
Go to the terminal window at `/covid19/delivery-finder-bot` folder 
`You will have to open separate terminal windows for finding each retailer's availability window`
when you are at `/covid19/delivery-finder-bot` folder, follow the step below:

```
For instacart, run:
$ node finder.js -instacart 
```
OR
```
For Amazon Wholes Food, run:
$ node finder.js -amazonwholesfood
```
OR
```
For Costco Sameday, run:
$ node finder.js -costcosameday
```
OR
```
NOT SUPPORTED YET
For Amazon Fresh, run:
$ node finder.js -amazonfresh
```

**An example**
![example](https://github.com/jkshobby/deliveryfinderbot/master/assets/start.png)


In your output, if you see the following then you are all set.
```
** SUCCESS ** YOUR COOKIE VALUE OF instacartCookie IS CORRECT, NOW LET THE FINDER FIND AND ALERT YOU. MAKE SURE YOU KEEP THIS TERMINAL WINDOW & CHECKOUT PAGE OPEN WITH YOUR LAPTOP SOUND AT MAX
```

If you see any error, then it means you need to correctly put the values of cookie for that retailer

That's all!!

## What to expect next.
Leave your computer plugged in and don't close it (let it remain connected to the internet). You may leave it in the low power mode if you wish. Let the terminal window remain opened and you may see progress there every minute. This finder will keep checking the availability window every minute, you may hear a [Beep sound](https://clyp.it/fjrsqftl) when it finds an availability. Then you just go to the opened retailer's checkout page (as mentioned in step 2) and refresh it. You may see the availability window. *Remember there is no guarantee that this script will find a delivery window, unless retailer opens it (common sense) Sometime if you don't act fast enough then even if script alerted the delivery window, but you delayed in taking action, then the window may disappear) :wink:*

## Any developer wants to contribute?
You are welcome to send the PR

## Thanks to these folks who contributed in the development of this script for supporting the cause.
1. [jkshobby](https://github.com/jkshobby)

## Disclaimer
The author doesn't take any responsibility for any situation that may be the result of running this script. Please use it at your own risk.


