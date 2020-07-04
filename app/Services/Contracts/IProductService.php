<?php

namespace App\Services\Contracts;

interface IProductService
{
    public function RetrieveAll();
    public function FindById($id);
    public function Create();
    public function Update();
    public function Delete();
}