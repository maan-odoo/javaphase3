from odoo import _, api, fields, models

class Shop(models.Model):
    _name = "phase3.product"
    _inherit = ['image.mixin']

    name = fields.Char()
    description = fields.Html()
    price = fields.Char()

