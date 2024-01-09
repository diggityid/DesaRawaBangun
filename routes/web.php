<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminAboutController;
use App\Http\Controllers\AdminDownloadController;
use App\Http\Controllers\AdminLembagaController;
use App\Http\Controllers\AdminPegawaiController;
use App\Http\Controllers\DownloadController;
use App\Http\Controllers\GaleriController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LembagaController;
use App\Http\Controllers\PegawaiController;
use App\Http\Controllers\PengumumanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'home'])->name('home');
Route::get('/about', [AboutController::class, 'about'])->name('about');
Route::get('/pegawai', [PegawaiController::class, 'pegawai'])->name('pegawai');
Route::get('/pengumuman', [PengumumanController::class, 'pengumuman'])->name('pengumuman');
Route::get('/download', [DownloadController::class, 'download'])->name('download');
Route::get('/galeri', [GaleriController::class, 'galeri'])->name('galeri');
Route::get('/lembaga', [LembagaController::class, 'lembaga'])->name('lembaga');

Route::prefix('/admin')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/about', [AdminAboutController::class, 'about'])->name('about-form');
    Route::post('/about', [AdminAboutController::class, 'doAbout'])->name('about-input');

    Route::get('/pegawai', [AdminPegawaiController::class, 'pegawai'])->name('pegawai-form');
    Route::post('/pegawai', [AdminPegawaiController::class, 'insertPegawai'])->name('pegawai-insert');
    Route::post('/pegawai/{$id}/update', [AdminPegawaiController::class, 'updatePegawai'])->name('pegawai-update');
    Route::post('/pegawai/{$id}/delete', [AdminPegawaiController::class, 'deletePegawai'])->name('pegawai-delete');

    Route::get('/download', [AdminDownloadController::class, 'download'])->name('admin-form');
    Route::post('/download', [AdminDownloadController::class, 'insertDownload'])->name('admin-insert');

    Route::get('/lembaga', [AdminLembagaController::class, 'lembaga'])->name('lembaga-form');
    Route::post('/lembaga', [AdminLembagaController::class, 'insertLembaga'])->name('lembaga-insert');
    Route::post('/lembaga/{$id}/update', [AdminLembagaController::class, 'updateLembaga'])->name('lembaga-update');
    Route::post('/lembaga/{$id}/delete', [AdminLembagaController::class, 'deleteLembaga'])->name('lembaga-delete');
});



Route::post('/admin/login', [UserController::class, 'doLogin']);
Route::get('/admin/current', [UserController::class, 'curren']);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';