# Sistema de Diseño - QueHayMed

## Paleta de Colores

### Colores Principales
- **Fondo principal:** `#EAF2E3` (Verde agua muy suave)
- **Superficies y tarjetas:** `#FFFFFF` (Blanco puro)
- **Texto principal:** `#2D3E50` (Gris azulado oscuro, suave)
- **Texto secundario:** `#5A6D7E` (Gris medio)

### Familia Tipográfica
- **Principal:** `Inter` (Google Fonts) o `DM Sans` como alternativa
- **Respaldo:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### Espaciado de Texto
- **Altura de línea predeterminada:** 1.5
- **Letter-spacing:** Normal para todo, -0.01em para títulos

### Botones

#### Botón Primario (Compra/Acción principal)
- **Fondo:** `#FF637D` (Rosa)
- **Texto:** Blanco, peso 500
- **Padding:** 12px 24px
- **Border-radius:** 12px
- **Sombra:** `0 2px 4px rgba(255, 99, 125, 0.2)`
- **Hover:** Fondo `#E54B68`
- **Active:** Fondo `#CC3F57`
- **Disabled:** Opacidad 0.5, sin hover

#### Botón Secundario (Info/Detalles)
- **Fondo:** `#66D7D1` (Menta)
- **Texto:** Blanco, peso 500
- **Padding:** 12px 24px
- **Border-radius:** 12px
- **Hover:** Fondo `#4FC1BB`

### Tarjetas de Evento (Flyers)

#### Contenedor
- **Fondo:** `#FFFFFF`
- **Border-radius:** 20px
- **Sombra:** `0 4px 12px rgba(255, 99, 125, 0.08)`
- **Padding:** 16px
- **Transición:** `all 0.2s ease`
- **Hover:** Sombra `0 8px 24px rgba(255, 99, 125, 0.15)`

#### Imagen del Flyer
- **Border-radius:** 16px
- **Aspect ratio:** 16/9 o 4/3 (según formato)
- **Object-fit:** cover
- **Background fallback:** `#F4F1BB`

#### Contenido de la Tarjeta
- **Título:** H3, margen superior 12px, margen inferior 4px
- **Fecha/Lugar:** Cuerpo pequeño, color `#5A6D7E`, margen inferior 8px
- **Precio:** Cuerpo, peso 600, color `#2D3E50`
- **Restricción de edad:** Badge si aplica

### Badges y Etiquetas

#### Badge +18
- **Fondo:** `#FFF0F2`
- **Borde:** `1px solid #FF637D`
- **Texto:** `#FF637D`, peso 600, tamaño 0.75rem
- **Padding:** 4px 8px
- **Border-radius:** 20px
- **Display:** inline-block

#### Checkbox (Aviso de mayor de edad)
- **Borde:** `2px solid #CBD5E1`
- **Border-radius:** 4px
- **Checked:** Fondo `#FF637D`, borde `#FF637D`
- **Label:** Cuerpo, color `#2D3E50`, margen izquierdo 8px

### Modales y Alertas

#### Modal de aviso (+18)
- **Overlay:** `rgba(45, 62, 80, 0.5)` (azul oscuro semitransparente)
- **Contenido:** Fondo blanco, border-radius 24px, padding 24px
- **Título:** H2, margen inferior 8px
- **Mensaje:** Cuerpo, color `#5A6D7E`
- **Botones:** Primario (Rosa) y Secundario (Menta), full width en mobile

### Barra Superior (Header)

#### Contenedor
- **Fondo:** `#FFFFFF`
- **Padding:** 12px 16px
- **Border-bottom:** `1px solid #E0E8D9`

#### Logo/Título
- **Color:** `#FF637D`
- **Peso:** 600
- **Tamaño:** 1.5rem

#### Botones de acción (Login/Registro)
- **Estilo:** Botón terciario (outline) para Login
- **Estilo:** Botón primario (rosa) para Registro (versión compacta)

### Espaciado General (Mobile First)

| Elemento | Margen/Padding |
|----------|----------------|
| **Contenedor principal** | Padding: 16px |
| **Entre secciones** | Margin-bottom: 24px |
| **Entre tarjetas** | Gap: 16px |
| **Entre elementos de formulario** | Gap: 20px |
| **Padding de página** | 16px laterales |
| **Iconos y texto en botones** | Gap: 8px |