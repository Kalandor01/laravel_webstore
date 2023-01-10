<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index()
    {
        $item = Item::all();

        return $item;
    }

    public function show($id)
    {
        $copy = Item::find($id);
        return $copy;
    }

    public function store(Request $request)
    {
        $item = new Item();
        $item->name = $request->name;
        $item->brand = $request->brand;
        $item->price = $request->price;
        $item->save();
    }

    public function update(Request $request, $itemId)
    {
        $item = Item::find($itemId);
        $item->name = $request->name;
        $item->brand = $request->brand;
        $item->price = $request->price;
        $item->save();
        return Item::find($item->id);
    }


    public function destroy($itemId)
    {
        $item = Item::find($itemId)->delete();
        $item = Item::all();
        return $item;
    }
}
