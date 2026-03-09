-- Landing: tabla de contactos/cotizaciones desde el formulario público
create table landing_contacts (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  company text not null,
  email text not null,
  phone text,
  employees text,
  message text not null,
  created_at timestamptz default now()
);

-- Permitir inserciones desde el frontend (anon key)
alter table landing_contacts enable row level security;

create policy "Permitir inserciones publicas"
  on landing_contacts
  for insert
  to anon
  with check (true);

-- Solo usuarios autenticados pueden leer los contactos
create policy "Solo autenticados pueden leer"
  on landing_contacts
  for select
  to authenticated
  using (true);
