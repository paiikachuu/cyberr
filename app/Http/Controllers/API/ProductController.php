<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Contracts\IProductService;

class ProductController extends Controller
{
    private $productService;

    public function __construct(IProductService $productServiceContract)
    {
        $this->productService = $productServiceContract;
    }   

    public function index()
    {
        return $this->productService->RetrieveAll();
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        return $this->productService->FindById($id);
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}