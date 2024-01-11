<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Pegawai</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
</head>

<body>
    @include('components.header', ['user' => $user, 'add' => $user ? 'pegawai-form-create' : '', 'text' => 'Tambah'])


    <div class="container-md border rounded p-3">
        <form method="post" action="{{ route('pegawai-update', ['id' => $content[0]->id]) }}" enctype="multipart/form-data">
            @csrf
            <div class="row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Nama</label>
                <div class="col-sm-10">
                    <input class="form-control @error('name') is-invalid @enderror" type="text" name="name" id="name"
                        value="{{ old('name') ?? $content[0]->name }}">
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
                <label for="jabatan" class="col-sm-2 col-form-label">Jabatan</label>
                <div class="col-sm-10">
                    <input class="form-control @error('jabatan') is-invalid @enderror" type="text" name="jabatan" id="jabatan"
                        value="{{ old('jabatan') ?? $content[0]->jabatan }}">
                    @error('jabatan')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="nip" class="col-sm-2 col-form-label">NIP</label>
                <div class="col-sm-10">
                    <input class="form-control @error('nip') is-invalid @enderror" type="text" name="nip" id="nip"
                        value="{{ old('nip') ?? $content[0]->nip }}">
                    @error('nip')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="riyawat_studi" class="col-sm-2 col-form-label">Pendidikan</label>
                <div class="col-sm-10">
                    <textarea class="form-control @error('riwayat_studi') is-invalid @enderror" id="riwayat_studi" name="riwayat_studi"
                        rows="3">{{ old('riwayat_studi') ?? $content[0]->riwayat_studi }}</textarea>
                    @error('riwayat_studi')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Update Data</button>
        </form>
    </div>
</body>

</html>