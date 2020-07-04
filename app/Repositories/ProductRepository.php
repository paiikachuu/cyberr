<?php

namespace App\Repositories;

use App\Models\Products;
use App\Repositories\Contracts\IProductRepository;

class ProductRepository implements IProductRepository
{
    public function RetrieveAll()
    {
        return Products::all();
    }

    public function FindById($id)
    {
        return Products::find($id);
    }

    public function Create()
    {
        //
    }

    public function Update()
    {
        //
    }

    public function Delete()
    {
        //
    }
}

