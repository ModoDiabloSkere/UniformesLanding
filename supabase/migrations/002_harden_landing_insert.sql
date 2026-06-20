-- =============================================
-- Endurecer la inserción pública en landing_contacts (auditoría #9)
-- La policy anterior (with check (true)) permitía a anon insertar cualquier
-- valor, incluido el campo 'status' (añadido en la migración 004 de la API).
-- Esta policy restringe:
--   - status debe ser el inicial 'nueva' (anon no puede marcar contactos).
--   - límites de longitud razonables para frenar abuso/spam masivo.
-- =============================================

drop policy if exists "Permitir inserciones publicas" on landing_contacts;

create policy "Insercion publica restringida"
  on landing_contacts
  for insert
  to anon
  with check (
    status = 'nueva'
    and char_length(name) between 1 and 200
    and char_length(company) between 1 and 200
    and char_length(email) between 3 and 320
    and email like '%_@_%'
    and (phone is null or char_length(phone) <= 50)
    and (employees is null or char_length(employees) <= 20)
    and char_length(message) between 1 and 5000
  );
