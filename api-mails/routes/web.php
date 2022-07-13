<?php

use Illuminate\Support\Facades\Route;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {
    //$receivers = Receiver::pluck('email');
    /*$receivers = array(
        'hector.poncevna@gmail.com',
        'toxquisandra@gmail.com',
        'aline.quintero.vna@gmail.com',
        'moises.calderon@vnagroup.us'
    );*/

    $receivers = array(
        'miltonponceipn@gmail.com',
        'ja.1999.ga@gmail.com',
        'javi.javier.gm@gmail.com',
        '1199.correo.pruebas@gmail.com'
    );

    $data_email['confirmation_code'] = '200';
    $data_email['name'] = 'Hector Ponce';


    foreach ($receivers as $user) {
        Mail::send('mails.mail', $data_email, function($message) use ($user) {
            $message->to($user)->subject('Prueba de Correo Marketing');
        });
    }

    /*Mail::send('mails.mail', $data_email, function($message) use ($receivers) {
        $message->to($receivers)->subject('Prueba de Correo Marketing desde Correo @vento.com');
    });*/

    return "<h1 style='text-align: center;'><span style='color: rgb(35, 111, 161); font-family: 'comic sans ms', sans-serif;'>CORREO ENVIADO CORRECTAMENTE</span></h1>";
});
