<?php

namespace App\Services;

use App\Models\Products;
use App\Services\Contracts\IProductService;
use App\Repositories\Contracts\IProductRepository;


class ProductService implements IProductService
{
    private $productRepository;

    public function __construct(IProductRepository $productRepositoryContract)
    {
        $this->productRepository = $productRepositoryContract;
    }

    public function RetrieveAll(){
        return $this->productRepository->RetrieveAll();
    }

    public function FindById($id)
    {
        return $this->productRepository->FindById($id);
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