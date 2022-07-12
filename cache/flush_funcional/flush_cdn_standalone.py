from time import sleep
from tqdm import tqdm
import requests




def clear_cloudflare_cache():
	url = "https://api.cloudflare.com/client/v4/zones/cd629cd3bdcac48aa2e9dc163f54571e/purge_cache"
	headers = {
    	"X-Auth-Email": "hector.poncevna@gmail.com",
    	"X-Auth-Key": "cb7c3da4296fc124e999ce1ad873a13950172",
    	"Content-Type": "application/json"
    	}
	payload = '{ "purge_everything": true }'
	
	
	response = requests.post(url, headers=headers, data=payload)
	

	if response:

		print("\n\n\t\t\t Ejecutando Limpieza de Caché CDN... \n")
		for i in tqdm(range(0,35)):
		    sleep(1.0);
		print("\n\n")


		print("\t     ###################################################");
		print("\t     #### Limpieza de Caché Ejecutada Correctamente ####")
		print("\t     ###################################################\n");
	else:
		print("\n\t\t   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		print("\t\t   !!!! Cache CDN Purge Successfully !!!!")
		print("\t\t   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n");

if __name__ == '__main__':
	clear_cloudflare_cache()