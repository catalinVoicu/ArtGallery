<?xml version="1.0" encoding="ISO-8859-1"?>
<!-- Edited by XMLSpy® -->
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <h2>Tablouri</h2>
    <table class="tg">
      <tr>
        <th>Nume</th>
        <th>Autor</th>
        <th>Data</th>
        <th>Descriere</th>
      </tr>
      <xsl:for-each select="tablouri/tablou">
      <tr>
        <td><xsl:value-of select="nume" /></td>
        <td><xsl:value-of select="autor" /></td>
        <td><xsl:value-of select="data" /></td> 
        <td><xsl:value-of select="descriere" /></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>