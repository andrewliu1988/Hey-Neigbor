"""empty message

Revision ID: 91d6b50e14ef
Revises: fe3a8795ce24
Create Date: 2021-04-16 17:22:04.671987

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '91d6b50e14ef'
down_revision = 'fe3a8795ce24'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('events', sa.Column('attendee', sa.String(length=30), nullable=True))
    op.drop_column('events', 'attendees')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('events', sa.Column('attendees', sa.INTEGER(), autoincrement=False, nullable=False))
    op.drop_column('events', 'attendee')
    # ### end Alembic commands ###
