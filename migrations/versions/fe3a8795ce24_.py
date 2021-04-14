"""empty message

Revision ID: fe3a8795ce24
Revises: 1cba4a3b0ebf
Create Date: 2021-04-14 15:47:02.734243

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fe3a8795ce24'
down_revision = '1cba4a3b0ebf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('businesses', sa.Column('latitude', sa.String(length=50), nullable=False))
    op.drop_column('businesses', 'langitude')
    op.add_column('events', sa.Column('latitude', sa.String(length=50), nullable=False))
    op.drop_column('events', 'langitude')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('events', sa.Column('langitude', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
    op.drop_column('events', 'latitude')
    op.add_column('businesses', sa.Column('langitude', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
    op.drop_column('businesses', 'latitude')
    # ### end Alembic commands ###