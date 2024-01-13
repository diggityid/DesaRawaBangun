<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Agenda Desa Rawa Bangun</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <style>
        .limited-paragraph {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    </style>
</head>

<body>

    @include('components.header', [
    'user' => $user,
    'add' => $user ? 'agenda-form-create' : '', 'text' => $user ?
    'Buat Agenda' : ''])

    <h3>Agenda Desa</h3>

    @if(isset($content))
    @foreach($content as $item)
    <div class="card mb-3 m-5" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                @if(isset($content))
                <img src="{{ asset('storage/' . $item->images) }}" class="img-fluid w-100"
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
                                <td>{{ $item->title }}</td>
                            </tr>
                            <tr>
                                <td>{{ $item->created_at }}</td>
                            </tr>
                            <tr>
                                <td class="limited-paragraph">{{ $item->detail }}</td>
                            </tr>
                            <tr>
                                <td><a class="btn btn-info"
                                        href="{{ route('pengumuman-show', ['id' => $item->id]) }}">Lihat
                                        Selengkapnya</a>
                                </td>
                            </tr>
                            @if($user)
                            <tr>
                                <td><a class="btn btn-primary"
                                        href="{{ route('pengumuman-form-edit', ['id' => $item->id]) }}">Ubah</a>
                                </td>
                                <td>
                                    <form action="{{ route('pengumuman-delete', ['id' => $item->id]) }}" method="post">
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
    @endforeach
    @else
    <h3>Kosong</h3>
    @endif


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</body>

</html>