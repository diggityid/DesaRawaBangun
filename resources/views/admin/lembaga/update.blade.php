<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $content[0]->name }}</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
</head>

<body>
    @include('components.header', [
        'user' => $user, 
        'add' => $user ? 'lembaga-form-create' : '', 
        'text' => 'Tambah'])


    <div class="container-md border rounded p-3">
        <form method="post" action="{{ route('lembaga-update', ['id' => $content[0]->id]) }}" enctype="multipart/form-data">
            @csrf
            <div class="row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Nama</label>
                <div class="col-sm-10">
                    <input class="form-control @error('name') is-invalid @enderror" type="text" name="name" id="name"
                        value="{{ old('name') }}">
                    @error('name')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="images" class="col-sm-2 col-form-label">Masukan Foto</label>
                <div class="col-sm-10">
                    <input class="form-control @error('images') is-invalid @enderror" type="file"
                        id="images" name="images">
                    @error('images')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="singkatan" class="col-sm-2 col-form-label">Singkatan</label>
                <div class="col-sm-10">
                    <input class="form-control @error('singkatan') is-invalid @enderror" type="text" name="singkatan" id="singkatan"
                        value="{{ old('singkatan') }}">
                    @error('singkatan')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="dasar_hukum" class="col-sm-2 col-form-label">Dasar Hukum</label>
                <div class="col-sm-10">
                    <input class="form-control @error('dasar_hukum') is-invalid @enderror" type="text" name="dasar_hukum" id="dasar_hukum"
                        value="{{ old('dasar_hukum') }}">
                    @error('dasar_hukum')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="alamat" class="col-sm-2 col-form-label">Alamat Kantor</label>
                <div class="col-sm-10">
                    <input class="form-control @error('alamat') is-invalid @enderror" type="text" name="alamat" id="alamat"
                        value="{{ old('alamat') }}">
                    @error('alamat')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="profile" class="col-sm-2 col-form-label">Profile</label>
                <div class="col-sm-10">
                    <textarea class="form-control @error('profile') is-invalid @enderror" id="profile" name="profile"
                        rows="3" value="{{ old('profile') }}"></textarea>
                    @error('profile')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="visi" class="col-sm-2 col-form-label">Visi</label>
                <div class="col-sm-10">
                    <textarea class="form-control @error('visi') is-invalid @enderror" id="visi" name="visi"
                        rows="3" value="{{ old('visi') }}"></textarea>
                    @error('visi')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="misi" class="col-sm-2 col-form-label">Misi</label>
                <div class="col-sm-10">
                    <textarea class="form-control @error('misi') is-invalid @enderror" id="misi" name="misi"
                        rows="3" value="{{ old('misi') }}"></textarea>
                    @error('misi')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="tugas" class="col-sm-2 col-form-label">Tugas</label>
                <div class="col-sm-10">
                    <textarea class="form-control @error('tugas') is-invalid @enderror" id="tugas" name="tugas"
                        rows="3" value="{{ old('tugas') }}"></textarea>
                    @error('tugas')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="fungsi" class="col-sm-2 col-form-label">Fungsi</label>
                <div class="col-sm-10">
                    <textarea class="form-control @error('fungsi') is-invalid @enderror" id="fungsi" name="fungsi"
                        rows="3" value="{{ old('fungsi') }}"></textarea>
                    @error('fungsi')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="pengurus" class="col-sm-2 col-form-label">Kepengurusan</label>
                <div class="col-sm-10">
                    <textarea class="form-control @error('pengurus') is-invalid @enderror" id="pengurus" name="pengurus"
                        rows="3" value="{{ old('pengurus') }}"></textarea>
                    @error('pengurus')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Update Data</button>
        </form>
    </div>
</body>

</html>