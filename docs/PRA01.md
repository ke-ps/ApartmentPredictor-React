# PRA01 - Apartment Predictor SPA

## Descripción del proyecto
Esta SPA permite gestionar apartamentos: ver listado, ver detalles, crear, editar y eliminar apartamentos.
Los datos se almacenan en `localStorage` para que se mantengan entre recargas.

## Modelo de datos
El objeto `Apartment` tiene los siguientes campos:

- `id`: número único del apartamento
- `title`: título del apartamento
- `city`: ciudad donde se encuentra
- `price`: precio
- `rooms`: número de habitaciones
- `bathrooms`: número de baños
- `size`: tamaño en m²
- `parking`: booleano, si tiene parking
- `terrace`: booleano, si tiene terraza
- `pool`: booleano, si tiene piscina
- `available`: booleano, si está disponible

## Lógica de la SPA
- **Listar apartamentos:** se muestra la lista de apartamentos (`ApartmentList`).  
- **Detalle:** al hacer click sobre un apartamento, se muestra su detalle (`ApartmentDetail`).  
- **Crear/Editar:** al crear o editar un apartamento, se abre el formulario (`ApartmentForm`).  
- **Persistencia:** la lista de apartamentos y el apartamento que se está editando se guarda en `localStorage`, así se mantiene incluso tras recargar la página.  

