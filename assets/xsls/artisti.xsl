<?xml version="1.0" encoding="ISO-8859-1" ?>
<!-- Edited by XMLSpy® -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Artisti</h2>
                <table class="tg">
                    <tr>
                        <th>Nume</th>
                        <th>Data</th>
                        <th>Nationalitate</th>
                        <th>Descriere</th>
                    </tr>
                    <xsl:for-each select="artisti/artist">
                    <tr>
                        <td><xsl:value-of select="nume" /></td>
                        <td><xsl:value-of select="data_nasterii" /></td>
                        <td><xsl:value-of select="nationalitate" /></td>
                        <td><xsl:value-of select="descriere" /></td>
                    </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>

