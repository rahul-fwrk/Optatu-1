cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-uniquedeviceid.UniqueDeviceID",
    "file": "plugins/cordova-plugin-uniquedeviceid/www/uniqueid.js",
    "pluginId": "cordova-plugin-uniquedeviceid",
    "merges": [
      "window.plugins.uniqueDeviceID"
    ]
  },
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/ios/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-geolocation.Coordinates",
    "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "Coordinates"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "PositionError"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.Position",
    "file": "plugins/cordova-plugin-geolocation/www/Position.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "Position"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-nativegeocoder.NativeGeocoder",
    "file": "plugins/cordova-plugin-nativegeocoder/www/NativeGeocoder.js",
    "pluginId": "cordova-plugin-nativegeocoder",
    "clobbers": [
      "nativegeocoder"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-x-socialsharing.SocialSharing",
    "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
    "pluginId": "cordova-plugin-x-socialsharing",
    "clobbers": [
      "window.plugins.socialsharing"
    ]
  },
  {
    "id": "cordova-plugin-stripe.stripe",
    "file": "plugins/cordova-plugin-stripe/www/CordovaStripe.js",
    "pluginId": "cordova-plugin-stripe",
    "clobbers": [
      "cordova.plugins.stripe"
    ]
  },
  {
    "id": "card.io.cordova.mobilesdk.CardIO",
    "file": "plugins/card.io.cordova.mobilesdk/www/cdv-plugin-card-io.js",
    "pluginId": "card.io.cordova.mobilesdk",
    "clobbers": [
      "CardIO"
    ]
  },
  {
    "id": "com.paypal.cordova.mobilesdk.PayPalMobile",
    "file": "plugins/com.paypal.cordova.mobilesdk/www/cdv-plugin-paypal-mobile-sdk.js",
    "pluginId": "com.paypal.cordova.mobilesdk",
    "clobbers": [
      "PayPalMobile"
    ]
  },
  {
    "id": "cordova-sms-plugin.Sms",
    "file": "plugins/cordova-sms-plugin/www/sms.js",
    "pluginId": "cordova-sms-plugin",
    "clobbers": [
      "window.sms"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-camera": "4.0.1",
  "cordova-plugin-device": "1.1.4",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-splashscreen": "4.0.3",
  "cordova-plugin-uniquedeviceid": "1.3.2",
  "cordova-plugin-whitelist": "1.3.1",
  "ionic-plugin-keyboard": "2.2.1",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-plugin-add-swift-support": "1.7.0",
  "cordova-plugin-nativegeocoder": "2.0.4",
  "cordova-plugin-statusbar": "2.4.1",
  "cordova-plugin-network-information": "2.0.1",
  "es6-promise-plugin": "4.1.0",
  "cordova-plugin-x-socialsharing": "5.2.1",
  "cordova-plugin-stripe": "1.5.3",
  "card.io.cordova.mobilesdk": "2.1.0",
  "com.paypal.cordova.mobilesdk": "3.5.0",
  "cordova-sms-plugin": "0.1.11"
};
// BOTTOM OF METADATA
});