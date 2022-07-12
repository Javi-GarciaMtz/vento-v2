<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\Motorcycle;

class MotorcycleController extends Controller
{
    public function index() {
        //$motorcycles = DB::table('motorcycles')->select()->get();
        $motorcycles = Motorcycle::all();
        return response()->json([
            'code'      =>  200,
            'status'    =>  'success',
            'motorcycles'     =>  $motorcycles
        ], 200);
    }

    public function store(Request $request) {
        // Recoger los datos por POST
        $json = $request -> input('json', null);
        $params = json_decode($json);

        $params_array = json_decode($json, true);
        //var_dump(empty($params_array));die();

        if (!empty($params_array)) {

            // Validar los datos
            $validate = \Validator::make($params_array, [
                'model' =>  'required',
                'min_price' =>  'required',
                'max_price' =>  'required',
                'onsale'    =>  'required',
                'stock_quantity'     =>  'required',
                'stock_status'  =>  'required',
                'total_sales'   =>  'required'
            ]);

            if ($validate->fails()) {
                $data = array(
                    'code'      =>   400,
                    'status'    =>  'error',
                    'message'   =>  'No se ha guardado la moto, faltan datos'
                );
            } else {
                $motorcycle = new Motorcycle();

                $motorcycle->model = $params->model;
                $motorcycle->min_price = $params->min_price;
                $motorcycle->max_price = $params->max_price;
                $motorcycle->onsale = $params->onsale;
                $motorcycle->stock_quantity = $params->stock_quantity;
                $motorcycle->stock_status = $params->stock_status;
                $motorcycle->rating_count = $params->rating_count;
                $motorcycle->average_rating = $params->average_rating;
                $motorcycle->total_sales = $params->total_sales;
                $motorcycle->tax_status = $params->tax_status;
                $motorcycle->tax_class = $params->tax_class;
                $motorcycle->image = $params->image;

                $motorcycle->save();

                $data = array(
                    'code'  =>  200,
                    'status'    =>  'success',
                    'motorcycle'    =>  $motorcycle
                );
            }
        } else {
            $data = array(
                'code'      =>  400,
                'status'    =>  'error',
                'message'   =>  'Envia los datos correctamente.'
            );
        }

        return response()->json($data, $data['code']);
    }

    public function update($id, Request $request) {

        // Recoger los datos por POST
        $json = $request -> input('json', null);
        $params_array = json_decode($json, true);

        // Datos para devolver
        $data = array(
            'code'      =>  400,
            'status'    =>  'error',
            'message'   =>  'No se actualizo la moto'
        );

        if (!empty($params_array)) {
            // Validar los datos
            $validate = \Validator::make($params_array, [
                'model' =>  'required',
                'min_price' =>  'required',
                'max_price' =>  'required',
                'onsale'    =>  'required',
                'stock_quantity'     =>  'required',
                'stock_status'  =>  'required',
                'total_sales'   =>  'required'
            ]);

            if ($validate -> fails()) {
                $data['errors'] = $validate->errors();
                return response()->json($data, $data['code']);
            }
            // Eliminar lo que no queremos actualizar
            unset($params_array['id']);
            unset($params_array['created_at']);

            // Conseguir usuario identificado
            //$user = $this -> getIdentity($request);

            // Buscar el registro a actualizar
            $motorcycle = Motorcycle::where('id', $id)
                        //-> where('user_id', $user -> sub)
                        -> first();

            if (!empty($motorcycle) && is_object($motorcycle)) {
                // Actualizar el registro
                $motorcycle -> update($params_array);

                $data = array(
                    'code'      =>  200,
                    'status'    =>  'success',
                    'motorcycle'      =>  $motorcycle,
                    'changes'   =>  $params_array
                );
            }
        }
        // Devolver la respuesta
        return response() -> json($data, $data['code']);
    }

    public function destroy($id, Request $request) {
        // Conseguir usuario identificado
        //$user = $this -> getIdentity($request);

        // Conseguir el registro
        $motorcycle = Motorcycle::where('id', $id)
                    //-> where('user_id', $user -> sub)
                    -> first();
        //var_dump($motorcycle);die();
        if (!empty($motorcycle)) {
             // Borrar el registro
            $motorcycle->delete();

            // Devolver respuesta
            $data = array(
                'code'  =>  200,
                'status'    =>  'success',
                'motorcycle'    =>  $motorcycle
            );
        } else {
            $data = array(
                'code'      =>  404,
                'status'    =>  'error',
                'message'   =>  'La moto no existe'
            );
        }

        return response()-> json($data, $data['code']);
    }

    public function upload(Request $request) {
        // Recoger la imagen de la peticion
        $image = $request -> file('file');

        // Validar imagen
        $validate = \Validator::make($request -> all(),[
            'file' => 'required|image|mimes:jpg,jpeg,png,gif'
        ]);

        // Guardar la imagen
        if (!$image || $validate -> fails()) {
            $data = array(
                'code'      =>  400,
                'status'    =>  'error',
                'message'   =>  'Error al subir la imagen'
            );
        } else {
            $image_name = time().$image -> getClientOriginalName();
            \Storage::disk('motorcycles')->put($image_name, \File::get($image));

            $data = array(
                'code'      =>  200,
                'status'    =>  'success',
                'image'     =>  $image_name
            );
        }

        // Devolver respuesta
        return response()->json($data, $data['code']);
    }

    public function getImage($filename) {
        // Comprobar si existe el fichero
        $isset = \Storage::disk('motorcycles')->exists($filename);

        if ($isset) {
            // Conseguir la imagen
            $file = \Storage::disk('motorcycles')->get($filename);

            // Devolver la imagen
            return new Response($file, 200);
        } else {
            // Mostrar el error
            $data = array(
                'code'      =>  404,
                'status'    =>  'error',
                'message'   =>  'La imagen no existe.'
            );
        }
        return response()->json($data, $data['code']);
    }

    public function datatable() {
        $motorcycles = Motorcycle::all();
        return response()->json($motorcycles, 200);
    }

}
