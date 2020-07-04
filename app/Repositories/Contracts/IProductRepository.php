<?php

namespace App\Repositories\Contracts;

use App\Models\Products;

interface IProductRepository
{
    public function RetrieveAll();
    public function FindById($id);
    public function Create();
    public function Update();
    public function Delete();
}