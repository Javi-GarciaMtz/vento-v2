<?php
// Replace EMAIL/API_KEY/ZONE_ID with your details. 
// Zone ID is on the dashboard for the domain in the bottom right.
// Api keys are generated from the account settings. You must give cache purge permissions
// Place this script on your webserver and point a Github Webhook at it, and you'll clear 
// the Cloudflare cache every time you do a push to GH.

try {
        $head = [];
        $head[] = 'Content-Type: application/json';
        $head[] = 'X-Auth-Email: hector.poncevna@gmail.com';
        $head[] = 'Authorization: Bearer cb7c3da4296fc124e999ce1ad873a13950172';
        $head[] = 'cache-control: no-cache';

        $url = 'https://api.cloudflare.com/client/v4/zones/cd629cd3bdcac48aa2e9dc163f54571e/purge_cache';
        // You can also purge files like:
        // $purge = ['files' => ['example.com/styles.css']]
        $purge = ['purge_everything' => true];
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);

        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");

        curl_setopt($ch, CURLOPT_HTTPHEADER, $head);

        curl_setopt($ch,CURLOPT_POSTFIELDS, json_encode($purge));
        var_dump(curl_exec($ch));
        $result = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        var_dump($ch);

}
catch(Exception $e) {
  print($e);
}