<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pegawai Desa Rawa </title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

</head>

<body>
    @include('components.header', [
    'user' => $user,
    'add' => $user ? 'pegawai-form-create' : '',
    'text' => 'Tambah'
    ])

    <h5 class="card-title m-5">{{ $content[0]->name ?? null }}</h5>
    <div class="card mb-3 m-5" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                @if(isset($content))
                <img src="{{ asset('storage/' . $content[0]->images) }}" class="img-fluid w-100"
                    style="object-fit: cover; height: 100%;" alt="...">
                @else
                <img src="#" class="img-fluid w-100" style="object-fit: cover; height: 100%;" alt="...">
                @endif
            </div>

            <div class="col-md-8">
                <div class="card-body">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Nama</td>
                                <td>:</td>
                                <td>{{ $content[0]->name }}</td>
                            </tr>
                            <tr>
                                <td>Jabatan</td>
                                <td>:</td>
                                <td>{{ $content[0]->jabatan }}</td>
                            </tr>
                            <tr>
                                <td>NIP</td>
                                <td>:</td>
                                <td>{{ $content[0]->nip }}</td>
                            </tr>
                            <tr>
                                <td colspan="3" style="white-space: pre-wrap;">{{ $content[0]->riwayat_studi }}</td>
                            </tr>
                            @if($user)
                            <tr>
                                <td><a class="btn btn-primary"
                                        href="{{ route('pegawai-form-edit', ['id' => $content[0]->id]) }}">Ubah</a>
                                </td>
                                <td colspan="2">
                                    {{-- <p>{{$id}}</p> --}}
                                    <form action="{{ route('pegawai-delete', ['id' => $content[0]->id]) }}"
                                        method="post">
                                        @csrf
                                        <button class="btn btn-danger" type="submit">Hapus</button>
                                    </form>
                                </td>
                            </tr>
                            @endif
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</body>

</html>